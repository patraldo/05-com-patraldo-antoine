import { json } from '@sveltejs/kit';
import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';
import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const auth = {
  auth: {
    api_key: '9b138c2123c1641cbdca4b54a2d2f826-5465e583-6f104a10',
    domain: 'https://patraldo.com'
  }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

const emailHtml = render({
	template: Hello,
	props: {
		name: 'Svelte'
	}
});

const options = {
	from: 'cheftech@mexicanbold.com',
	to: 'patrouch@gmail.com',
	subject: 'hello world',
	html: emailHtml
};

transporter.sendMail(options);
