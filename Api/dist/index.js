"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
mongoose_1.default.connect(`${process.env.URL}${process.env.PASS}${process.env.DB}`, {
    ALPNProtocols: undefined,
    appName: "",
    auth: undefined,
    authMechanism: undefined,
    authMechanismProperties: undefined,
    authSource: "",
    autoCreate: false,
    autoEncryption: undefined,
    autoIndex: false,
    bufferCommands: false,
    ca: undefined,
    cert: undefined,
    checkKeys: false,
    checkServerIdentity: undefined,
    ciphers: undefined,
    compressors: undefined,
    connectTimeoutMS: 0,
    crl: undefined,
    dbName: "",
    directConnection: false,
    driverInfo: undefined,
    ecdhCurve: undefined,
    enableUtf8Validation: false,
    family: undefined,
    forceServerObjectId: false,
    heartbeatFrequencyMS: 0,
    hints: undefined,
    ignoreUndefined: false,
    journal: false,
    key: undefined,
    loadBalanced: false,
    localAddress: undefined,
    localPort: undefined,
    localThresholdMS: 0,
    lookup: undefined,
    maxConnecting: 0,
    maxIdleTimeMS: 0,
    maxPoolSize: 0,
    maxStalenessSeconds: 0,
    minDHSize: undefined,
    minHeartbeatFrequencyMS: 0,
    minPoolSize: 0,
    monitorCommands: false,
    noDelay: false,
    pass: "",
    passphrase: undefined,
    pfx: undefined,
    pkFactory: undefined,
    proxyHost: "",
    proxyPassword: "",
    proxyPort: 0,
    proxyUsername: "",
    raw: false,
    readConcern: undefined,
    readConcernLevel: undefined,
    readPreference: undefined,
    readPreferenceTags: [],
    rejectUnauthorized: undefined,
    replicaSet: "",
    retryReads: false,
    retryWrites: false,
    secureContext: undefined,
    secureProtocol: undefined,
    serializeFunctions: false,
    serverApi: undefined,
    serverMonitoringMode: undefined,
    serverSelectionTimeoutMS: 0,
    servername: undefined,
    session: undefined,
    socketTimeoutMS: 0,
    srvMaxHosts: 0,
    srvServiceName: "",
    ssl: false,
    tls: false,
    tlsAllowInvalidCertificates: false,
    tlsAllowInvalidHostnames: false,
    tlsCAFile: "",
    tlsCRLFile: "",
    tlsCertificateKeyFile: "",
    tlsCertificateKeyFilePassword: "",
    tlsInsecure: false,
    user: "",
    w: undefined,
    waitQueueTimeoutMS: 0,
    writeConcern: undefined,
    wtimeoutMS: 0,
    zlibCompressionLevel: undefined
});
const userSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
});
const User = mongoose_1.default.model('User', userSchema);
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
