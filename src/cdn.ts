import cosmwasmclient from '.';
import cosmosclient from '@cosmos-client/core';
import Long from 'long';

(window as any).cosmwasmclient = cosmwasmclient;

if ((window as any).cosmosclient) {
  (window as any).cosmosclient.config.mergeCodecMaps(cosmosclient.config.codecMaps);
} else {
  (window as any).Long = Long;
  (window as any).cosmosclient = cosmosclient;
}
