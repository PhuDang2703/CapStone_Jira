import React, { useState, useEffect } from 'react';
import { Outlet, Route } from 'react-router-dom';
import { Layout } from 'antd';
import LoginJiraBugs from '../../pages/JiraBugs/LoginJiraBugs/LoginJiraBugs';

const { Sider, Content } = Layout;

export default function UserLoginTemplate() {
    
    const [{ width, height }, setSize] = useState({ width: Math.round(window.innerWidth), height: Math.round(window.innerHeight) });

    useEffect(() => {
        window.onresize = () => {
            setSize({
                width: Math.round(window.innerWidth),
                height: Math.round(window.innerHeight)
            })
        }
    }, [])

    return (
        <>
            <Layout>
                <Sider width={width / 2} style={{ height: height, backgroundImage: `url(https://picsum.photos/${Math.round(width / 2)}/${height})`, backgroundSize: '100%' }}>
                </Sider>

                <Content>
                    <LoginJiraBugs />
                </Content>

            </Layout>
        </>
    )
}
