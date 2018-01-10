FROM clojure:alpine
MAINTAINER Miroslaw Puczynski <public.mila@gmail.com>
           
ENV port=10535
VOLUME ["/home/mila/.m2" "/root/.m2"]


RUN apk update && apk upgrade && apk --update --no-cache add vim

## if we wanna sass
#RUN apk --update add --virtual build_deps \
#    build-base ruby ruby-dev ruby-irb ruby-rdoc libffi-dev libc-dev linux-headers \
#    libxml2-dev libxslt-dev

#RUN gem install sass
       
WORKDIR /w
        
CMD ["lein", "run"]


