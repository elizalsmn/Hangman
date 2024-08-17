sudo docker run -it --rm -v "$(pwd)":/content -p 8080:8080 node bash -c "npm i && npm run dev"
