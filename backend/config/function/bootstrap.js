module.exports = async () => {
    await strapi.config.functions.websocket(strapi);
  };
  