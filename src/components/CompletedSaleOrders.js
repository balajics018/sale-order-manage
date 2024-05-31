import React from 'react';
import { useSaleOrders } from '../api';
import { Box, Table, Tbody, Td, Th, Thead, Tr, Button } from '@chakra-ui/react';
import EditSaleOrderModal from './EditSaleOrderModal';

const CompletedSaleOrders = () => {
  const { data, isLoading } = useSaleOrders('completed');
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [currentOrder, setCurrentOrder] = React.useState(null);

  const handleEdit = (order) => {
    setCurrentOrder(order);
    setIsEditModalOpen(true);
  };

  return (
    <Box>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Th>Customer ID</Th>
              <Th>SKU ID</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Invoice No</Th>
              <Th>Invoice Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((order) => (
              <Tr key={order.id}>
                <Td>{order.customer_id}</Td>
                <Td>{order.sku_id}</Td>
                <Td>{order.price}</Td>
                <Td>{order.quantity}</Td>
                <Td>{order.invoice_no}</Td>
                <Td>{order.invoice_date}</Td>
                <Td>
                  <Button onClick={() => handleEdit(order)}>View</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      {currentOrder && (
        <EditSaleOrderModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          order={{ ...currentOrder, isReadOnly: true }}
        />
      )}
    </Box>
  );
};

export default CompletedSaleOrders;
