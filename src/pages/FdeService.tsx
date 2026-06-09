import { useEffect } from 'react';

export default function FdeService() {
  useEffect(() => {
    window.location.href = 'https://fde.mygongfu.com';
  }, []);
  return null;
}
