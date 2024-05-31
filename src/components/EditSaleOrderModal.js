// src/components/EditSaleOrderModal.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';

const EditSaleOrderModal = ({ isOpen, onClose, order }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: order,
  });

  const onSubmit = (data) => {
    // Implement update logic
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="customer_id">
            <FormLabel>Customer ID</FormLabel>
            <Input {...register('customer_id')} isReadOnly />
          </FormControl>
          <FormControl id="sku_id">
            <FormLabel>SKU ID</FormLabel>
            <Input {...register('sku_id')} isReadOnly />
          </FormControl>
          <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input {...register('price')} />
          </FormControl>
          <FormControl id="quantity">
            <FormLabel>Quantity</FormLabel>
            <Input {...register('quantity')} />
          </FormControl>
          <FormControl id="invoice_no">
            <FormLabel>Invoice No</FormLabel>
            <Input {...register('invoice_no')} />
          </FormControl>
          <FormControl id="invoice_date">
            <FormLabel>Invoice Date</FormLabel>
            <Input type="date" {...register('invoice_date')} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditSaleOrderModal;
