export const displayUrlNice = (url: string) => {
  let niceUrl = url.replace('www.', '');
  niceUrl = niceUrl.replace('http://', '');
  niceUrl = niceUrl.replace('https://', '');
  return niceUrl;
};
