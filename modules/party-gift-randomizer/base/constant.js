const baseUrl = "http://localhost:9000/"
const baseGateway = baseUrl + "api/biz/party-gift-randomizer/"

module.exports.gateway = {
  connect: baseGateway + "connect",
  create: baseGateway + "create",
  qrcode: baseGateway + "qrcode",
  join: baseGateway + "join",
  getReady: baseGateway + "get-ready",
  start: baseGateway + "start",
  addGift: baseGateway + "add-gift"
}