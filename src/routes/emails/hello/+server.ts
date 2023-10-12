import { json } from '@sveltejs/kit';
import { render } from 'svelte-email';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.mailgun.org',
	port: 587,
	secure: true,
	auth: {
		user: 'postmaster@patraldo.com	',
		pass: 'b81d51f6430a76ba2c6206731de88c1d-5465e583-6a77b837'
	}
});

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
