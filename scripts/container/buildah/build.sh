#!/bin/sh
container=$(buildah from node:16)
buildah run --network=host $container -- apt-get update
buildah run --network=host $container -- apt-get install python -y
buildah config --workingdir /app $container
buildah copy $container package.json package-lock.json /app/
buildah copy $container . /app/
buildah run --network=host $container -- npm install
buildah run --network=host $container -- npm run build

commit_container=$(buildah from docker.io/library/nginx:stable-alpine)
container_mnt=$(buildah mount $container)
buildah copy $commit_container assets/nginx.conf /etc/nginx/conf.d/default.conf
buildah copy $commit_container assets/entrypoint.sh /entrypoint.sh
buildah copy $commit_container "${container_mnt}/app/dist" /usr/share/nginx/html
buildah config --entrypoint /entrypoint.sh $container

buildah commit $commit_container docker.io/ssfdust/orbuculum-vue:v0.0.1-alphav2-alpine

buildah umount $container
buildah rm $container
buildah rm $commit_container
