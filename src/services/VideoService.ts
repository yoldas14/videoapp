import React, {ReactElement, useState, memo} from 'react';
import {ServiceUtils} from '../utils';
import {UrlConsts} from '../constants';

const fetchVideos = async () => {
  return await ServiceUtils.get(UrlConsts.VideoServiceUrl); //TODO
};

export {fetchVideos};
