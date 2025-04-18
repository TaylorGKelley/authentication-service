import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import CSRFContext from '../contexts/CSRFContext';
import api from '../lib/api';

const CSRFProvider: FC<PropsWithChildren> = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState<string | undefined>();

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        const response = await api.get<{ csrfToken: string }>(
          'http://localhost:7001/api/v1/csrf-token',
          { withCredentials: true },
        );

        setCsrfToken(response.data?.csrfToken);
      } catch (error) {
        return Promise.reject(error);
      }
    };

    fetchCSRFToken();
  }, []);

  return (
    <CSRFContext.Provider value={csrfToken}>{children}</CSRFContext.Provider>
  );
};

export default CSRFProvider;
