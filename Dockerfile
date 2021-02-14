FROM keymetrics/pm2:15-alpine
EXPOSE 8080
CMD ["pm2-runtime", "start", "pm2.json"]
