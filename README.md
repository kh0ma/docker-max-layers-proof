# docker-max-layers-proof
This project allows you to check if docker have max layers in image and print error `max depth exceeded`.

####Run it locally

Notice! You need have you docker machine installed locally.

		git clone https://github.com/kh0ma/docker-max-layers-proof.git
		cd docker-max-layers-proof
		docker build -t docker-error .
