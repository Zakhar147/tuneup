// src/app/AppProviders.tsx
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout, AppRoutes } from '../Routing';

import Spinner from '@shared/ui/Spinner';

const AppProviders: React.FC = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="overlay">
          <Spinner/>
        </div>
      }
    >
      <Layout>
        <AppRoutes />
      </Layout>
    </Suspense>
  </BrowserRouter>
);

export default AppProviders;
