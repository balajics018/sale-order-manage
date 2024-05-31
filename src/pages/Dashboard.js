// src/pages/Dashboard.js
import React from 'react';
import { Tab, Tabs, TabList, TabPanel, TabPanels, Box, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import CreateSaleOrderModal from '../components/CreateSaleOrderModal';
import ActiveSaleOrders from '../components/ActiveSaleOrders';
import CompletedSaleOrders from '../components/CompletedSaleOrders';
import ThemeToggle from '../components/ThemeToggle';

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={4}>
      <ThemeToggle />
      <Button colorScheme="blue" onClick={onOpen} mb={4}>
        + Sale Order
      </Button>
      <Tabs>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActiveSaleOrders />
          </TabPanel>
          <TabPanel>
            <CompletedSaleOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CreateSaleOrderModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Dashboard;
