import React from 'react';
import { Button, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
const CustomerMeasurements = () => {
  const onFinish = (values) => {
    console.log('Measurements:', values);
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-orange-500">Customer Measurements</h1>
        <Link to="/" className="text-orange-500">skip for now</Link>
      </div>
      <Form onFinish={onFinish} className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-400">Upper Body Measurements</h2>
        <Form.Item name="neck" label="Neck Circumference (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="chest" label="Chest Circumference (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="waist" label="Waist Circumference (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="shoulder" label="Shoulder Width (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="arm" label="Arm Length (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="sleeve" label="Sleeve Length (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>

        <h2 className="text-lg font-semibold text-gray-400">Lower Body Measurements</h2>
        <Form.Item name="hip" label="Hip Circumference (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="inseam" label="Inseam (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="outseam" label="Out Seam (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="thigh" label="Thigh Circumference (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item name="ankle" label="Ankle Circumference (in inch)">
          <Input className="bg-gray-800 text-white border border-gray-700 rounded w-full py-2 px-3" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full py-4 bg-orange-500 text-black rounded-md font-semibold mb-4 hover:bg-orange-400">
            Save Measurements
          </Button>
        </Form.Item>
      </Form>
    </div>
      </div>
    </div>
    
  );
};

export default CustomerMeasurements;
