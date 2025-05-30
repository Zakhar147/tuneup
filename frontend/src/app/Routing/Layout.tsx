import React, { ReactNode } from 'react';

import Background from '@shared/ui/Background';
import { Navbar } from '@widgets/Navbar';
import { Footer } from '@widgets/Footer';
import { Container } from '@shared/ui/Container';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Background>
    <Navbar />
    <main className='flex-1'>
      <Container>
        {children}
      </Container>
    </main>
    <Footer />
  </Background>
);