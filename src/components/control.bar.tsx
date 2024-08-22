"use client";
import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import PublicBar from './public.bar';
import PrivateBar from './private.bar';

export default function ControlBar({
  username = ''
  , mainAction = { name: 'logout', href: '/login' }
  , mainmenu = false
}) {
    if( mainmenu ) {
        return <PrivateBar />;
    }
  
    
  
    return <PublicBar />;
  }