// src/pages/LoginPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === 'user' && data.password === 'password') {
      localStorage.setItem('authenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input {...register('username')} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password')} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
