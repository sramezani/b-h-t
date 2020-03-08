import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import '../../src/theme/style.css';
import { Colors } from '../../src/theme/colors';

import { Layout } from "../../src/component";

const theme = {
	colors: {
		...Colors
	}
}


export default class MyApp extends App {
  render() {
	const { Component, pageProps } = this.props
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
  }
}