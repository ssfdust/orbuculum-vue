buildah:
	buildah unshare bash scripts/container/buildah/build.sh

run-podman:
	podman run --replace --name orbuculum-vue -d --network=host docker.io/ssfdust/orbuculum-vue:v0.0.1-alpine
