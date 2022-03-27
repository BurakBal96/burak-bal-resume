FROM nginx:1.21.6

# Identify the maintainer of an image
LABEL version="1.0.0"
LABEL maintainer="burakbal1296@gmail.com"

# Updateing the work DIR
WORKDIR /usr/share/nginx/html

COPY build /usr/share/nginx/html