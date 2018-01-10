FROM clojure:latest
MAINTAINER Miroslaw Puczynski <public.mila@gmail.com>
           
ENV port=10535
VOLUME ["/home/mila/.m2" "/root/.m2"]

RUN apt-get update && apt-get install -y --no-install-recommends \
		vim \
    rlwrap \
    && rm -rf /var/lib/apt/lists/*


## if we wanna sass
RUN apt-get update && apt-get install -y --no-install-recommends \
    ruby ruby-dev && \
    rm -rf /var/lib/apt/lists/* && \
    echo 'gem: --no-document' > /etc/gemrc && \
    gem install sass

       
WORKDIR /w
        
CMD ["lein", "run"]


