FROM node:alpine

WORKDIR /app

COPY package*json ./

RUN npm i

COPY . ./

ENV MONGO_URL=mongodb+srv://vaishnavi:Vaishnavi@zomato-master.gwnsy.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=483243251744-2leiqlf59mr4qtdpsu0ehv429i8kfmfo.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=HpW_9fHW2_27TgjLLc_JyE_B
ENV AWS_S3_ACCESS_KEY=AKIA6QQABJ5GUTOYPNHJ
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__API__KEY=4a740b46565476c2ff3e7af86088a0ce-a3c55839-328ba658
ENV MAILGUN__DOMAIN=sandboxdafcb735bbc24f268abfe4bc8736ff78
ENV RZR_PAY_ID=rzp_test_O0t1V4LiNnzS82
ENV RZR_PAY_SECRET=U40Hc1t6WiGfWFCmoma72c6W

CMD ["npm", "run", "start"]