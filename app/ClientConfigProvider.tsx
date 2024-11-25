'use client'; 
import { ConfigProvider } from 'antd';
import { ReactNode, useState, useEffect } from 'react';
import Loading from './components/Loading';

export default function ClientConfigProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timeout = setTimeout(() => {
        setIsLoading(false); // Una vez cargado, oculta el loader
      }, 2000); // Puedes ajustar el tiempo o agregar lógica de carga
  
      return () => clearTimeout(timeout); 
  }, []);

  if (!mounted) {
    return null; // Evita el parpadeo de estilos
  }  

  

  if (isLoading) {
    return <Loading />; // Mostrar el loader mientras cargan los datos
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5a1482',
          colorInfo: "#a2c217",
          colorTextBase: "#1d1d1d",
          colorError: "#ff0004",
          colorBgContainer: '#fdf8ff',
        },
      }}
      componentSize="large"
    >
      {children}
    </ConfigProvider>
  );
}
