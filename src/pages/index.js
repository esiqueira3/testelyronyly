import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Strong, Text, Button, Span, LinkBox, Input, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdArrowForward, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				You choose are great vacation
			</title>
			<meta name={"description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:title"} content={"You choose are great vacation"} />
			<meta property={"og:description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/OGimage.png?v=2021-09-23T20:32:10.363Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/favicon.png?v=2021-09-23T20:33:18.314Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/270.png?v=2021-09-23T20:33:32.819Z"} />
			<meta name={"msapplication-TileColor"} content={"#0CAD1C"} />
		</Helmet>
		<Section
			padding="18px 0 18px 0"
			quarkly-title="Header"
			position="relative"
			box-shadow="0 0 0 0 #717171"
			border-color="#6e6d6d"
			border-width="0 0 3px 0"
		>
			<Override slot="SectionContent" justify-content="space-around" flex-direction="row" align-items="center" />
			<Image
				max-height="80px"
				src="https://uploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-01-30T13:02:07.987Z"
				lg-max-width="150px"
				sm-width="50%"
				width="20%"
				height="50px"
				srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-01-30T13%3A02%3A07.987Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-01-30T13%3A02%3A07.987Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-01-30T13%3A02%3A07.987Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-01-30T13%3A02%3A07.987Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-01-30T13%3A02%3A07.987Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-01-30T13%3A02%3A07.987Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-01-30T13%3A02%3A07.987Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Components.QuarklycommunityKitMobileSidePanel width="50%">
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Button Icon" size="32px" />
				<Box
					display="flex"
					justify-content="flex-end"
					align-items="center"
					md-flex-direction="column"
					font="24px sans-serif"
				>
					<Link
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="normal 6 20px/1.5 --fontFamily-googleOpenSans"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
					>
						HOME
					</Link>
					<Link
						font="normal 6 20px/1.5 --fontFamily-googleOpenSans"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
					>
						SOBRE
					</Link>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="normal 6 20px/1.5 --fontFamily-googleOpenSans"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
					>
						SERVIÇOS
					</Link>
					<Link
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="normal 6 20px/1.5 --fontFamily-googleOpenSans"
					>
						CONTATO
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section
			padding="70px 0 0 0"
			quarkly-title="HeroBlock"
			display="block"
			overflow-x="scroll"
			height="500px"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/679a56009e74900024007521/images/Fundo.jpg?v=2025-01-30T23:41:37.183Z) center/contain repeat scroll padding-box"
		>
			<Override
				slot="SectionContent"
				display="flex"
				flex-direction="row"
				flex-wrap="no-wrap"
				background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
			/>
			<Image
				max-height="600px"
				object-position="0% 80%"
				lg-max-height="300px"
				md-max-height="200px"
				sm-max-height="150px"
				src="https://uploads.quarkly.io/679a56009e74900024007521/images/img01-capa-home.png?v=2025-01-30T13:01:32.626Z"
				object-fit="cover"
				margin="0px 3px 0px 0px"
				display="flex"
				overflow="visible"
				min-width="30px"
				min-height="30px"
				srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/img01-capa-home.png?v=2025-01-30T13%3A01%3A32.626Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/img01-capa-home.png?v=2025-01-30T13%3A01%3A32.626Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/img01-capa-home.png?v=2025-01-30T13%3A01%3A32.626Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/img01-capa-home.png?v=2025-01-30T13%3A01%3A32.626Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/img01-capa-home.png?v=2025-01-30T13%3A01%3A32.626Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/img01-capa-home.png?v=2025-01-30T13%3A01%3A32.626Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/img01-capa-home.png?v=2025-01-30T13%3A01%3A32.626Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box min-width="100px" min-height="100px">
				<Text
					color="--dark"
					lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
					md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
					margin="0px 0px 0 0px"
					font="normal 400 12px/1.2 --fontFamily-googleOpenSans"
					display="grid"
					height="fit-content"
					align-self="center"
					text-align="justify"
				>
					"A Tinello Assessoria ajuda milhares de brasileiros que migram para Europa e enfrentam dificuldades com a burocracia do dia a dia, estamos aqui para ser o facilitador e deixar sua jornada mais tranquila"
					<br />
					<br />
					<Strong>
						CEO Patrícia Tinello
					</Strong>
				</Text>
				<Text
					color="--dark"
					lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
					md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
					font="normal 700 45px/1.2 --fontFamily-googleOswald"
					display="grid"
					height="fit-content"
					align-self="center"
				>
					CONVERSÃO CNH BRASILEIRA PARA CARTA DE CONDUÇÃO PORTUGUESA
				</Text>
				<Button margin="30px 0px 0px 0px" text-align="justify">
					Saiba Mais
				</Button>
			</Box>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0" border-color="#ff0000" quarkly-title="Nossos Serviços">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" margin="30px 64px 0px 64px" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				flex="0 1 auto"
				overflow-y="auto"
				flex-direction="column"
				align-items="flex-start"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="normal 700 50px/1.2 --fontFamily-googleOswald"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
					order="-1"
				>
					Nossos Serviços{" "}
					<Span
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						color="--green"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						user-select="auto"
						pointer-events="auto"
					>
						&
						<br />
					</Span>
					Especialidades
				</Text>
				<Image
					src="https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					display="flex"
					flex="0 1 auto"
					order="-1"
					align-self="flex-start"
					min-width="400px"
					min-height="500px"
					max-width={0}
					max-height={0}
					text-align="left"
					overflow="hidden"
					margin="50px 0px 0px 0px"
					width="100% border-box"
					height="60%"
					position="static"
					flex-direction="row"
					srcSet="https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-direction="column"
				flex-wrap="no-wrap"
			>
				<Text
					margin="170px 0px 0px 0px"
					font="--lead"
					color="--dark"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					text-align="justify"
				>
					Somos uma equipe dedicada e especializada em oferecer{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						serviços de assessoria & consultoria de excelência
					</Strong>
					, focados principalmente na{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						conversão de CNH
					</Strong>
					{" "}(Carteira Nacional de Habilitação) e na obtenção da{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						cidadania italiana
					</Strong>
					. Nossa missão é proporcionar aos nossos clientes um suporte abrangente e eficiente em todas as etapas desses processos, tornando-os mais acessíveis e menos complexos.
					<br />
					<br />
					Conte conosco para conduzir sua conversão de CNH ou o processo de cidadania italiana com profissionalismo, eficácia e comprometimento. Sua jornada legal começa aqui na{"  "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Tinello Consultoria.
					</Strong>
				</Text>
				<Box
					min-width="100px"
					min-height="50px"
					display="flex"
					flex-direction="column-reverse"
					flex-wrap="no-wrap"
					margin="20px 0px 0px 0px"
					as="footer"
				>
					<Components.QuarklycommunityKitPopup
						display="flex"
						align-content="flex-start"
						animFunction="step-start"
						onloadShow
						cursor="help"
						transform="matrix(1,0,0, 1,0,0)"
						align-self="flex-start"
					>
						<Override slot="Button Open" type="link" height="45px">
							Nossos Serviços
						</Override>
						<Override
							slot="Wrapper :open"
							width="600px"
							height="500px"
							flex-direction="column-reverse"
							justify-content="flex-start"
						/>
						<Override slot="Wrapper" height="auto" width="200px" min-width="700px" />
						<Override
							slot="Content"
							display="flex"
							height="auto"
							flex="0 0 auto"
							align-self="auto"
							pointer-events="auto"
						/>
						<Override slot="Wrapper :closed" width="auto" height="auto" />
						<Image
							src="https://uploads.quarkly.io/679a56009e74900024007521/images/Services.png?v=2025-02-05T12:55:31.772Z"
							display="block"
							width="auto"
							height="auto"
							srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/Services.png?v=2025-02-05T12%3A55%3A31.772Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Services.png?v=2025-02-05T12%3A55%3A31.772Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Services.png?v=2025-02-05T12%3A55%3A31.772Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Services.png?v=2025-02-05T12%3A55%3A31.772Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Services.png?v=2025-02-05T12%3A55%3A31.772Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Services.png?v=2025-02-05T12%3A55%3A31.772Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Services.png?v=2025-02-05T12%3A55%3A31.772Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Components.QuarklycommunityKitPopup>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" quarkly-title="Fundadora">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 0px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
				height="404px"
				flex-wrap="no-wrap"
			>
				<Image
					max-width="340px"
					src="https://uploads.quarkly.io/679a56009e74900024007521/images/image%2052.png?v=2025-02-02T19:54:13.851Z"
					md-margin="0px 0px 20px 0px"
					srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/image%2052.png?v=2025-02-02T19%3A54%3A13.851Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/image%2052.png?v=2025-02-02T19%3A54%3A13.851Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/image%2052.png?v=2025-02-02T19%3A54%3A13.851Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/image%2052.png?v=2025-02-02T19%3A54%3A13.851Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/image%2052.png?v=2025-02-02T19%3A54%3A13.851Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/image%2052.png?v=2025-02-02T19%3A54%3A13.851Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/image%2052.png?v=2025-02-02T19%3A54%3A13.851Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					CEO Patrícia Tinello
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text
					margin="0px 0px 40px 0px"
					color="--dark"
					font="italic 700 30px/1.2 --fontFamily-googleOpenSans"
					md-margin="0px 0px 30px 0px"
					text-align="right"
				>
					"Resolver problemas complexos é minha paixão"
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="normal 500 20px/1.5 --fontFamily-googleOpenSans" text-align="justify">
					Na{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Tinello Consultoria
					</Strong>
					, nossa trajetória é marcada pelo talento visionário e pela dedicação inabalável dos nossos fundadores.Cada um traz consigo uma história única de experiência e paixão pela satisfação no atendimento ao cliente, unindo-se para criar uma equipe excepcional e uma consultoria que se destaca no fornecimento de serviços de alta qualidade.{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="normal 500 20px/1.5 --fontFamily-googleOpenSans" text-align="justify">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Patrícia Tinello:
					</Strong>
					<br />
					Como visionária e líder, ela é a fundadora da{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Tinello Consultoria & Assessoria
					</Strong>
					{" "}Com vasta experiência, ele/a traz consigo uma visão estratégica para o negócio e é conhecida por sua abordagem inovadora na resolução de questões complexas.
					<br />
					<br />
					<br />
					Ela é a nossa{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						maior incentivadora e liderança
					</Strong>
					{" "}para em oferecer serviços excepcionais. Seu espírito empreendedora e visão para o futuro continuam a inspirar nossa equipe a{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						alcançar novos patamares{" "}
					</Strong>
					e a fornecer soluções de alta qualidade para nossos clientes.{"\n\n\n\n"}
				</Text>
			</Box>
		</Section>
		<Section background="--color-dark" padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" display="flex" />
			<Box
				width="40%"
				padding="15px 60px 15px 15px"
				lg-width="100%"
				lg-align-items="center"
				lg-display="flex"
				lg-justify-content="center"
				lg-flex-direction="column"
				lg-padding="15px 15px 15px 15px"
				lg-margin="0px 0px 30px 0px"
			>
				<Text margin="0px 0px 24px 0px" font="normal 800 50px/1.2 --fontFamily-googleOswald" color="#ffffff" text-align="right">
					CONVERSÃO CNH
				</Text>
				<Text
					font="--base"
					color="--light"
					lg-text-align="center"
					margin="0px 0px 0px 0px"
					text-align="right"
				>
					Ajudamos muitos brasileiros com a conversão da cnh brasileira para carta de condução Portuguesa
				</Text>
			</Box>
			<Box width="60%" display="flex" lg-width="100%" sm-flex-wrap="wrap">
				<Box
					width="33.33333%"
					padding="15px 15px 15px 15px"
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					lg-width="50%"
					sm-width="100%"
				>
					<Text margin="0px 0px 16px 0px" font="--headline1" color="#ffffff">
						2022
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--orange" text-align="center">
						+130 Conversões
					</Text>
				</Box>
				<Box
					width="33.33333%"
					padding="15px 15px 15px 15px"
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					lg-width="50%"
					sm-width="100%"
				>
					<Text margin="0px 0px 16px 0px" font="--headline1" color="#ffffff">
						2023
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--orange" text-align="center">
						+150 Conversões
					</Text>
				</Box>
				<Box
					width="33.33333%"
					padding="15px 15px 15px 15px"
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					lg-width="50%"
					sm-width="100%"
				>
					<Text margin="0px 0px 16px 0px" font="--headline1" color="#ffffff">
						2024
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--orange" text-align="center">
						+160 Conversões
					</Text>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				width="100%"
				flex-direction="row"
				flex-wrap="no-wrap"
				overflow="visible"
				flex="1 1 0%"
				margin="30px 0px 0px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/679a56009e74900024007521/images/carta%20portugal.png?v=2025-02-02T20:28:23.959Z"
					display="block"
					width="420px"
					align-self="center"
					margin="0px 0px 0px 41%"
					text-align="center"
					srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/carta%20portugal.png?v=2025-02-02T20%3A28%3A23.959Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/carta%20portugal.png?v=2025-02-02T20%3A28%3A23.959Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/carta%20portugal.png?v=2025-02-02T20%3A28%3A23.959Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/carta%20portugal.png?v=2025-02-02T20%3A28%3A23.959Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/carta%20portugal.png?v=2025-02-02T20%3A28%3A23.959Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/carta%20portugal.png?v=2025-02-02T20%3A28%3A23.959Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/carta%20portugal.png?v=2025-02-02T20%3A28%3A23.959Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" quarkly-title="Liberdade Global">
			<Text
				margin="0px 0px 150p 0px"
				font="normal 700 30px/1.2 --fontFamily-googleOpenSans"
				color="--dark"
				md-text-align="center"
				sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
			>
				POR QUÊ TER LIBERDADE GLOBAL?
			</Text>
			<Text margin="0px 0px 0px 0px" font="normal 500 14px/1.5 --fontFamily-googleOpenSans" color="#000000" md-text-align="center">
				Descubra como esse sonho pode mudar a sua vida!{"\n\n"}
			</Text>
			<Box
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/679a56009e74900024007521/images/esse.png?v=2025-02-03T17:42:25.407Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="30px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
				padding="211px 16px 80px 16px"
			/>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 4%"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="12px"
			>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						1
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Liberdade Territorial
						<br />
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Direito de circular e morar por toda união europeia, a cidadania também garante o livre acesso a mais de 188 países, sem precisar de visto.{"\n\n"}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 30px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						2
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Segurança para você e sua família
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Segurança de morar e estudar em um país de primeiro mundo, além de ser uma herança para as próximas gerações.{"\n\n"}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						3
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Moeda forte
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Poder trabalhar em qualquer pais da União Europeia e tem a oportunidade de receber em Euro, ganhando muito mais qualidade de vida.{"\n\n"}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 0px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						4
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Qualidade de vida
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Ter controle sobre o território em que você vive ou trabalha pode resultar em melhores condições de vida, já que você pode escolher onde morar, como se organizar e o que priorizar para o seu bem-estar.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/679a56009e74900024007521/images/amarelo.png?v=2025-02-05T12:08:20.317Z) top/100% scroll padding-box"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			height="630px"
		>
			<Stack width="75%" margin="30px -16px -16px -16px">
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="80px 0 0 0">
						cansado de bater cabeça com os processos complexos na europa?{"\n\n"}
					</Text>
					<Text
						as="h1"
						font="normal 800 60px/1.2 --fontFamily-googleManrope"
						md-font="--headline2"
						margin="10px 0"
						width="700px"
						text-align="left"
					>
						"Deixe a burocracia com e gente e receba sua carta no conforto da sua casa"
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" md-padding="40px 0 40px 0" sm-padding="30px 0 30px 0">
			<Box margin="0px 0px 32px 0px" display="flex" flex-direction="column" align-items="flex-start">
				<Text
					font="normal 800 50px/1.2 --fontFamily-googleOswald"
					color="--dark"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="16px 0px 0px 0px"
				>
					AJUDAMOS MUITA GENTE EM VÁRIOS PAÍSES{"\n\n"}
				</Text>
				<Text
					font="italic 400 18px/1.5 --fontFamily-googleOpenSans"
					color="--darkL2"
					max-width="600px"
					display="grid"
					width="100%"
				>
					"Ajudamos muitas pessoas em vários países, oferecendo apoio e     soluções para os desafios que enfrentam em suas vidas, seja com a conversão da cnh ou a propria cidadania".
				</Text>
			</Box>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
					width="60%"
				>
					<Image
						src="https://uploads.quarkly.io/679a56009e74900024007521/images/Screenshot_3.png?v=2025-02-05T11:51:12.228Z"
						border-radius="24px"
						max-width="100%"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
						overflow="hidden"
						order="-1"
						display="grid"
						max-height="456px"
						srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_3.png?v=2025-02-05T11%3A51%3A12.228Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_3.png?v=2025-02-05T11%3A51%3A12.228Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_3.png?v=2025-02-05T11%3A51%3A12.228Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_3.png?v=2025-02-05T11%3A51%3A12.228Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_3.png?v=2025-02-05T11%3A51%3A12.228Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_3.png?v=2025-02-05T11%3A51%3A12.228Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_3.png?v=2025-02-05T11%3A51%3A12.228Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						Itália
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" sm-width="100%" lg-padding="0px 0px 0px 0px">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Conversão de CNH Brasileira
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.5 --fontFamily-googleOpenSans" color="--darkL2" text-align="justify">
							A comunidade brasileira na Itália é muito grande somos +160mil e muitos quando chegam esbarram na burocracia dos processos internos do país, é ai que atuamos dando total suporte nesses processos complexos, um dos mais procurados é conversão da cnh brasileira para carta de condução portuguesa.
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/679a56009e74900024007521/images/Screenshot_4.png?v=2025-02-05T11:30:29.943Z"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
						srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_4.png?v=2025-02-05T11%3A30%3A29.943Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_4.png?v=2025-02-05T11%3A30%3A29.943Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_4.png?v=2025-02-05T11%3A30%3A29.943Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_4.png?v=2025-02-05T11%3A30%3A29.943Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_4.png?v=2025-02-05T11%3A30%3A29.943Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_4.png?v=2025-02-05T11%3A30%3A29.943Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_4.png?v=2025-02-05T11%3A30%3A29.943Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						Reino Unido
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Categoria C,D,E
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.5 --fontFamily-googleOpenSans" color="--darkL2" text-align="justify">
							Muitos brasileiros trabalham em Londres com caminhão e precisam das categorias de pesados, a carta de condução portuguesa é uma excelente opção para comunidade brasileira que acabou de chegar ao país.
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/679a56009e74900024007521/images/Screenshot_5.png?v=2025-02-05T11:43:33.728Z"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
						srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_5.png?v=2025-02-05T11%3A43%3A33.728Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_5.png?v=2025-02-05T11%3A43%3A33.728Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_5.png?v=2025-02-05T11%3A43%3A33.728Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_5.png?v=2025-02-05T11%3A43%3A33.728Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_5.png?v=2025-02-05T11%3A43%3A33.728Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_5.png?v=2025-02-05T11%3A43%3A33.728Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Screenshot_5.png?v=2025-02-05T11%3A43%3A33.728Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						Irlanda
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Contato
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.5 --fontFamily-googleOpenSans" color="--darkL2" text-align="justify">
							Se voce está na Irlanda e precisa de ajuda com a conversão da cnh brasileira para portuguesa entre em contato hoje mesmo com nossa equipe.
						</Text>
					</Box>
				</Box>
			</LinkBox>
		</Section>
		<Section padding="80px 0 80px 0" background="--color-darkL2" quarkly-title="Avaliacoes">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--light"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Avaliações
				</Text>
				<Text margin="0px 0px 0px 0px" color="--lightD2" text-align="center" font="--lead">
					O que nossos clientes tem falado sobre nossos serviços
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--green" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="italic 400 18px/1.5 --fontFamily-googleOpenSans"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						text-align="justify"
					>
						"Fiquei extremamente satisfeito com o serviço de conversão da minha CNH para a Carta de Condução Portuguesa. O processo foi simples, rápido e a equipe foi super atenciosa, esclarecendo todas as minhas dúvidas. Recomendo sem hesitar!"{"\n\n"}
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19:47:23.498Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Sandro{" "}
								<br />
								Feitosa
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Pomezia - Itália
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 0px 0px 15px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--green" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="italic 400 18px/1.5 --fontFamily-googleOpenSans"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						text-align="justify"
					>
						"Excelente atendimento e agilidade no processo! A conversão da minha CNH foi concluída em pouco tempo e sem complicações. Tudo explicado claramente, com total transparência. Serviço de primeira qualidade!"{"\n\n"}
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19:47:16.297Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Claúdio{" "}
								<br />
								{"\n"}Bianchi{"\n\n"}
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Bern - Suiça
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--green" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="italic 400 18px/1.5 --fontFamily-googleOpenSans"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						text-align="justify"
					>
						"Muito grato pelo excelente serviço de conversão de CNH para Carta Portuguesa. A Patrícia foi super eficiente e me ajudou em todas as etapas. O processo foi tranquilo, e agora posso dirigir com minha nova carta. Amei!"{"\n\n"}
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Adriana
								<br />
								Taroli
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Dublin - Irlanda{" "}
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					lg-padding="0px 0px 0px 15px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--green" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="italic 400 18px/1.5 --fontFamily-googleOpenSans"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						text-align="justify"
					>
						"O serviço de conversão da minha CNH foi excelente. A equipe foi muito profissional, me orientou em todos os detalhes e o processo foi feito rapidamente. Agora tenho minha Carta de Condução Portuguesa sem nenhum transtorno. Super recomendo!"{"\n\n"}
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19:46:11.754Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Natan
								<br />
								Bartoloni
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Lisboa - Portugal
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" color="--dark" quarkly-title="Perguntas">
			<Text as="h1" font="--headline1" margin="0 0 24px 0">
				FAQs - Perguntas
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="normal 600 25px/1.2 --fontFamily-googleOpenSans" margin="12px 0" text-align="justify">
							Quais documentos são necessários para converter a CNH brasileira em europeia?
						</Text>
						<Text as="p" font="italic 500 14px/1.5 --fontFamily-googleManrope" margin="12px 0" color="--greyD2">
							Os documentos podem variar de um país para outro, mas geralmente incluem: CNH brasileira válida, passaporte válido, comprovante de residência, foto recente e exame médico.{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="normal 600 25px/1.2 --fontFamily-googleOpenSans" margin="12px 0">
							Qual é o processo de conversão da CNH brasileira em europeia?
							<br />
							{"\n\n"}
						</Text>
						<Text as="p" font="italic 500 14px/1.5 --fontFamily-googleManrope" margin="12px 0" color="--greyD2">
							O processo de conversão da CNH brasileira em europeia pode variar de país para país, mas geralmente envolve apresentar a documentação necessária, pagar as taxas aplicáveis e fazer exames médicos.{"\n\n\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="normal 600 25px/1.2 --fontFamily-googleOpenSans" margin="12px 0 12px 0">
							Quanto tempo leva o processo de Conversão da CNH brasileira em europeia?
						</Text>
						<Text as="p" font="italic 500 14px/1.5 --fontFamily-googleManrope" margin="12px 0" color="--greyD2">
							O tempo necessário para a conversão também pode variar, mas geralmente leva algumas semanas ou meses.{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="normal 600 25px/1.2 --fontFamily-googleOpenSans" margin="12px 0">
							A conversão da CNH brasileira em europeia é obrigatória para quem vive na Europa?{"\n\n"}
						</Text>
						<Text as="p" font="italic 500 14px/1.5 --fontFamily-googleManrope" margin="12px 0" color="--greyD2">
							Em muitos países europeus, é obrigatório que os motoristas que residem no país tenham uma CNH europeia. É importante verificar as leis e regulamentos do país em que você deseja dirigir ou morar.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="normal 600 25px/1.2 --fontFamily-googleOpenSans" margin="12px 0">
							Minha CNH precisa estar válida para que eu possa convertê-la?
						</Text>
						<Text as="p" font="italic 500 14px/1.5 --fontFamily-googleManrope" margin="12px 0" color="--greyD2">
							Sim. Sua cnh brasileira precisa estar dentro do prazo de validade.
						</Text>
					</Box>
				</Box>
				<Box width="33.333%" padding="16px 16px 16px 16px" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="normal 600 25px/1.2 --fontFamily-googleOpenSans" margin="12px 0">
							Posso dirigir na Europa com minha CNH brasileira enquanto aguardo a conversão?
						</Text>
						<Text as="p" font="italic 500 14px/1.5 --fontFamily-googleManrope" margin="12px 0" color="--greyD2">
							Em muitos países europeus, os turistas podem dirigir com uma CNH brasileira válida. No entanto, se você planeja morar na Europa, é recomendável verificar as leis e regulamentos locais e considerar converter sua!{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="92px 0 74px 0"
			background="url() 0 0 no-repeat"
			md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/airplanemode_active.svg?v=2021-09-24T22:50:23.546Z) center 15%/125px no-repeat scroll padding-box"
			md-padding="40px 0 40px 0"
			quarkly-title="Newsletter"
		>
			<Override slot="SectionContent" align-items="center" justify-content="center" />
			<Text
				max-width="440px"
				text-align="center"
				lg-font="normal 600 28px/1.2 &quot;Manrope&quot;, sans-serif"
				lg-max-width="340px"
				md-margin="0px 0px 52px 0px"
				margin="0px 0px 76px 0px"
				font="--headline3"
				color="--dark"
			>
				Newsletter
			</Text>
			<Components.QuarklycommunityKitNetlifyForm
				border-width="0px 0px 1px 0px"
				border-style="solid"
				border-color="--color-grey"
				width="100%"
				md-width="360px"
				sm-width="100%"
				max-width="600px"
				lg-max-width="340px"
			>
				<Override slot="Form" align-items="center" display="flex" justify-content="center" />
				<Box display="flex" align-items="center" justify-content="flex-start">
					<Input
						type="email"
						border-color="--color-grey"
						border-style="none"
						md-width="100%"
						min-width="400px"
						placeholder="   | Seu e-mail..."
						name="Email"
						required
						padding="6px 16px 6px 0px"
						border-width="0px"
						width="100%"
						color="--grey"
						lg-min-width="auto"
					/>
					<Button
						font="--link"
						flex-direction="row-reverse"
						padding="8px 4px 8px 24px"
						background="transparent"
						color="--dark"
						display="flex"
						text-align="right"
						align-items="center"
						justify-content="flex-end"
					>
						<Icon category="md" icon={MdArrowForward} color="--dark" margin="0px 0px 0px 16px" />
						Subscribe
					</Button>
				</Box>
			</Components.QuarklycommunityKitNetlifyForm>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
			quarkly-title="Contato"
		>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box>
						<Box
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="700px"
							position="relative"
							padding="0 0 0 64px"
							font="12px sans-serif"
						>
							<Icon
								size="40px"
								top="0"
								left="0"
								category="md"
								icon={MdLocationOn}
								position="absolute"
							/>
							<Text as="h4" margin="6px 0" font="--base">
								Visite-nos
							</Text>
							<Text as="p" margin="6px 0" font="normal 600 20px/1.2 --fontFamily-googleManrope">
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									Rua Dos Combatentes da Grande Guerra, n.º 106
									<br />
									{" "}
								</Strong>
							</Text>
							<Text as="p" margin="6px 0" font="normal 600 20px/1.2 --fontFamily-googleManrope">
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									<Strong>
										<Strong>
											2870-113
										</Strong>
										{"  "}- Montijo-Portugal
									</Strong>
									<br />
									{" "}
								</Strong>
							</Text>
						</Box>
						<Box
							position="relative"
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
							width="560px"
						>
							<Icon
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
								position="absolute"
								size="40px"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								E-mail{" "}
							</Text>
							<Text as="p" margin="6px 0" font="normal 600 30px/1.2 --fontFamily-googleOpenSans">
								<Link href="mailto:tinello.business@gmail.com" text-decoration="none" hover-text-decoration="underline" color="--light">
									tinello.business@gmail.com
								</Link>
							</Text>
						</Box>
						<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="395px" position="relative">
							<Icon
								left="0"
								category="md"
								icon={MdPhone}
								position="absolute"
								size="40px"
								top="0"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Contato
							</Text>
							<Text as="p" margin="6px 0" font="normal 600 30px/1.2 --fontFamily-googleOpenSans">
								+351 935 921 773
							</Text>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%">
					<Box>
						<Box
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-primary"
							max-width="360px"
						>
							<Text as="h3" font="normal 600 35px/1.2 --fontFamily-googleManrope" margin="0 0 20px 0" text-align="left">
								Obrigado pela sua mensagem
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Nome
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Email
											</Text>
											<Input max-width="400px" width="100%" type="email" name="email" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Mensagem
											</Text>
											<Input width="100%" name="message" as="textarea" rows="4" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column" align-items="flex-start">
											<Button background="--color-dark" href="mailto:tinello.business@gmail.com?Site Tinello">
												Enviar
											</Button>
										</Box>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-3">
			<Override slot="SectionContent" sm-align-items="center" width="600px" />
			<Box display="flex" flex-direction="column" align-items="center" margin="0px 0px 34px 0px">
				<Box
					md-margin="0px 0px 0px 0px"
					display="grid"
					md-justify-content="center"
					md-align-items="center"
					justify-content="center"
					sm-flex-wrap="wrap"
					grid-template-columns="repeat(5, 1fr)"
					grid-gap="16px 24px"
					sm-grid-template-columns="1fr"
				>
					<Link
						color="#5a5d64"
						margin="0px 6px 0px 0px"
						href="#"
						font="normal 400 18px/1.5 --fontFamily-googleOpenSans"
						text-decoration-line="initial"
						hover-color="--darkL1"
						transition="background-color 0.1s ease 0s"
						sm-text-align="center"
						md-margin="0px 0 0px 0px"
					>
						Home
					</Link>
					<Link
						margin="0px 6px 0px 6px"
						href="#"
						font="normal 400 18px/1.5 --fontFamily-googleOpenSans"
						text-decoration-line="initial"
						color="#5a5d64"
						hover-color="--darkL1"
						transition="background-color 0.1s ease 0s"
						sm-text-align="center"
						md-margin="0px 0 0px 6px"
					>
						Sobre
					</Link>
					<Link
						margin="0px 6px 0px 6px"
						href="#"
						font="normal 400 18px/1.5 --fontFamily-googleOpenSans"
						text-decoration-line="initial"
						color="#5a5d64"
						hover-color="--darkL1"
						transition="background-color 0.1s ease 0s"
						sm-text-align="center"
						md-margin="0px 0 0px 6px"
					>
						Serviços
					</Link>
					<Link
						margin="0px 6px 0px 6px"
						href="#"
						font="normal 400 18px/1.5 --fontFamily-googleOpenSans"
						text-decoration-line="initial"
						color="#5a5d64"
						hover-color="--darkL1"
						transition="background-color 0.1s ease 0s"
						sm-text-align="center"
						md-margin="0px 0 0px 6px"
					>
						Contatos
					</Link>
				</Box>
			</Box>
			<Image
				src="https://uploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-02-02T19:23:59.642Z"
				display="block"
				height="95px"
				srcSet="https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-02-02T19%3A23%3A59.642Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-02-02T19%3A23%3A59.642Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-02-02T19%3A23%3A59.642Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-02-02T19%3A23%3A59.642Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-02-02T19%3A23%3A59.642Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-02-02T19%3A23%3A59.642Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/679a56009e74900024007521/images/Ativo%208@2x.png?v=2025-02-02T19%3A23%3A59.642Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box
				display="grid"
				grid-template-columns="repeat(5, 1fr)"
				grid-gap="16px 24px"
				align-self="center"
				margin="20px 0px 40px 0px"
			>
				<LinkBox href="/">
					<Icon
						category="fa"
						icon={FaFacebook}
						size="24px"
						color="#5a5d64"
						hover-color="--dark"
						transition="background-color 1s ease 0s"
					/>
				</LinkBox>
				<LinkBox href="/">
					<Icon
						category="fa"
						icon={FaInstagram}
						size="24px"
						color="#5a5d64"
						hover-color="--dark"
						transition="background-color 1s ease 0s"
					/>
				</LinkBox>
				<LinkBox href="/">
					<Icon
						category="fa"
						icon={FaTwitterSquare}
						size="24px"
						color="#5a5d64"
						hover-color="--dark"
						transition="background-color 1s ease 0s"
					/>
				</LinkBox>
				<LinkBox href="/">
					<Icon
						category="fa"
						icon={FaGithub}
						size="24px"
						color="#5a5d64"
						hover-color="--dark"
						transition="background-color 1s ease 0s"
					/>
				</LinkBox>
				<LinkBox href="/">
					<Icon
						category="fa"
						icon={FaYoutube}
						size="24px"
						color="#5a5d64"
						hover-color="--dark"
						transition="background-color 1s ease 0s"
					/>
				</LinkBox>
			</Box>
			<Text
				margin="0 0px 0 0px"
				font="--base"
				color="#5a5d64"
				text-align="center"
				sm-display="flex"
				sm-flex-wrap="wrap"
			>
				© 2025  Tinello Assessoria & Consultoria
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});