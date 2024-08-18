sudo docker run -it --rm -v "$(pwd)":/content -p 0.0.0.0:8080:8080 node bash
cd content
npm i
npm run dev