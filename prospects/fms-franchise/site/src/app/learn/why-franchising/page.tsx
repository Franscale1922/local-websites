// Route alias: /learn/why-franchising → /learn/why-franchise
import { redirect } from 'next/navigation';

export default function WhyFranchisingRedirect() {
  redirect('/learn/why-franchise');
}
