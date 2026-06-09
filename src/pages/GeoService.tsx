import { useEffect } from 'react';

export default function GeoService() {
  useEffect(() => {
    window.location.href = 'https://geo.mygongfu.com';
  }, []);
  return null;
}
