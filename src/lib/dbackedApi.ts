import axios, { AxiosInstance } from 'axios';

import { API_ROOT } from './config';
import logger from './log';

let api: AxiosInstance;

export const registerApiKey = (apikey) => {
  api = axios.create({
    baseURL: API_ROOT,
    headers: {
      Authorization: `ApiKey ${apikey}`,
    },
  });
};

export const getProject = async () => {
  try {
    const { data } = await api.get('projects/own');
    return data;
  } catch (e) {
    if (e.response && e.response.data && e.response.data.status === 401) {
      logger.error('Invalid API key');
      process.exit(1);
    }
    logger.error('Unknow error while identifing to the DBacked server:', { code: e.code });
    process.exit(1);
  }
};

export const createBackup = async ({ agentId }) => {
  const { data } = await api.post('projects/own/backups', {
    agentId,
  });
  return data;
};

export const getUploadPartUrl = async (backup, partNumber) => {
  const { data } = await api.post(`projects/${backup.projectId}/backups/${backup.id}/status`, {
    partNumber,
    status: 'IN_PROGRESS',
  });
  return data;
};

export const finishUpload = async (backup, partsEtag) => {
  try {
    const { data } = await api.post(`projects/${backup.projectId}/backups/${backup.id}/status`, {
      status: 'DONE',
      partsEtag,
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};
