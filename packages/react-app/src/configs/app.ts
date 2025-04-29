console.log(getPreviewUrl(3001));
export const appConfig = {
  name: 'Todos App',
  version: '1.0.0',
  apiBaseUrl: `https://${getPreviewUrl(3001)}`,
};

function getPreviewUrl(port: number) {
  const REGEX = /(?<id>\w{5,6})-(?<port>\d{1,5})\.(?<hostname>.*)/;
  const currentUrl = location.host;
  const currentMatch = currentUrl.match(REGEX);

  if (!currentMatch?.groups) {
    return undefined;
  }
  const { id, hostname } = currentMatch.groups;

  if (!id || !port || !hostname) {
    return undefined;
  }

  return `${id}-${port}.${hostname}`;
}
