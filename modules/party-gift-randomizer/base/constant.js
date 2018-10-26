// const baseUrl = "http://localhost:9000/"
const baseUrl = "https://www.youbohudong.com/"

const baseGateway = baseUrl + "api/biz/party-gift-randomizer/"

module.exports.gateway = {
  connect: baseGateway + "connect",
  sessionInfo: baseGateway + "session-info",
  create: baseGateway + "create",
  qrcode: baseGateway + "qrcode",
  join: baseGateway + "join",
  getReady: baseGateway + "get-ready",
  start: baseGateway + "start",
  addGift: baseGateway + "add-gift"
}