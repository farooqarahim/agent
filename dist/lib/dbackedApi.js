"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("./config");
let api;
exports.registerApiKey = (apikey) => {
    api = axios_1.default.create({
        baseURL: config_1.API_ROOT,
        headers: {
            Authorization: `ApiKey ${apikey}`,
        },
    });
};
exports.getProject = async () => {
    try {
        const { data } = await api.get('projects/own');
        return data;
    }
    catch (e) {
        if (e.response && e.response.data && e.response.data.status === 401) {
            throw new Error('Invalid API key');
        }
        console.log(e);
        throw new Error('Unknow error while identifing to the DBacked server');
    }
};
exports.createBackup = async ({ agentId, agentVersion, publicKey, dbType, }) => {
    const { data } = await api.post('projects/own/backups', {
        agentId,
        agentVersion,
        publicKey,
        dbType,
    });
    return data;
};
exports.getUploadPartUrl = async ({ backup, partNumber, hash, agentId, }) => {
    const { data } = await api.post(`projects/${backup.projectId}/backups/${backup.id}/status`, {
        partNumber,
        agentId,
        hash,
        status: 'IN_PROGRESS',
    });
    return data;
};
exports.finishUpload = async ({ backup, partsEtag, hash, agentId, }) => {
    const { data } = await api.post(`projects/${backup.projectId}/backups/${backup.id}/status`, {
        status: 'DONE',
        partsEtag,
        hash,
        agentId,
    });
    return data;
};
//# sourceMappingURL=dbackedApi.js.map