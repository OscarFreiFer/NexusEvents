USE [master]
GO
/****** Object:  Database [NexusEventsDB]    Script Date: 30/05/2024 20:46:53 ******/
CREATE DATABASE [NexusEventsDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'NexusEvents', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\NexusEvents.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'NexusEvents_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\NexusEvents_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [NexusEventsDB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [NexusEventsDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [NexusEventsDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [NexusEventsDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [NexusEventsDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [NexusEventsDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [NexusEventsDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [NexusEventsDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [NexusEventsDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [NexusEventsDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [NexusEventsDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [NexusEventsDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [NexusEventsDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [NexusEventsDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [NexusEventsDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [NexusEventsDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [NexusEventsDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [NexusEventsDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [NexusEventsDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [NexusEventsDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [NexusEventsDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [NexusEventsDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [NexusEventsDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [NexusEventsDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [NexusEventsDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [NexusEventsDB] SET  MULTI_USER 
GO
ALTER DATABASE [NexusEventsDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [NexusEventsDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [NexusEventsDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [NexusEventsDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [NexusEventsDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [NexusEventsDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [NexusEventsDB] SET QUERY_STORE = ON
GO
ALTER DATABASE [NexusEventsDB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [NexusEventsDB]
GO
/****** Object:  User [Oscar-Portatil_ASUS]    Script Date: 30/05/2024 20:46:53 ******/
CREATE USER [Oscar-Portatil_ASUS] FOR LOGIN [Oscar-Portatil_ASUS] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 30/05/2024 20:46:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Events]    Script Date: 30/05/2024 20:46:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Events](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[UserID] [int] NOT NULL,
	[SpaceID] [int] NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[ImageUrl] [nvarchar](max) NULL,
 CONSTRAINT [PK_Events] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reserves]    Script Date: 30/05/2024 20:46:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reserves](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SpaceId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[EventId] [int] NOT NULL,
 CONSTRAINT [PK_Reserves] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Spaces]    Script Date: 30/05/2024 20:46:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Spaces](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[MaxCapacity] [int] NOT NULL,
	[ImageUrl] [nvarchar](max) NOT NULL,
	[Ubication] [nvarchar](max) NOT NULL,
	[SpaceType] [int] NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Spaces] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 30/05/2024 20:46:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](450) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240515172020_Initial', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240515182227_Change_events_table', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240516164426_Add_spcae_column', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240520181236_colum_address_venue', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240526092451_Change-EventTable', N'8.0.5')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240527191426_Change-DBschema', N'8.0.5')
GO
SET IDENTITY_INSERT [dbo].[Events] ON 

INSERT [dbo].[Events] ([Id], [Name], [Description], [StartDate], [UserID], [SpaceID], [CreatedDate], [EndDate], [ImageUrl]) VALUES (6, N'Prueba', N'Prueba para las fechas', CAST(N'2024-05-30T20:52:20.9210000' AS DateTime2), 6, 17, CAST(N'2024-05-27T22:53:16.2251884' AS DateTime2), CAST(N'2024-06-07T20:52:20.9210000' AS DateTime2), NULL)
INSERT [dbo].[Events] ([Id], [Name], [Description], [StartDate], [UserID], [SpaceID], [CreatedDate], [EndDate], [ImageUrl]) VALUES (7, N'Prueba', N'Prueba para las fechas', CAST(N'2024-06-16T20:52:20.9210000' AS DateTime2), 4, 17, CAST(N'2024-05-27T22:53:53.5058017' AS DateTime2), CAST(N'2024-06-21T20:52:20.9210000' AS DateTime2), NULL)
INSERT [dbo].[Events] ([Id], [Name], [Description], [StartDate], [UserID], [SpaceID], [CreatedDate], [EndDate], [ImageUrl]) VALUES (8, N'Prueba', N'Prueba para las fechas', CAST(N'2024-05-21T20:52:20.9210000' AS DateTime2), 4, 17, CAST(N'2024-05-27T23:04:37.8704471' AS DateTime2), CAST(N'2024-05-28T20:52:20.9210000' AS DateTime2), NULL)
INSERT [dbo].[Events] ([Id], [Name], [Description], [StartDate], [UserID], [SpaceID], [CreatedDate], [EndDate], [ImageUrl]) VALUES (9, N'Eurocopa', N'Ven a disfrutar de la Eurocopa en el estadio Santiago Bernabéu y vivirás una experiencia única.', CAST(N'2024-08-13T22:00:00.0000000' AS DateTime2), 6, 17, CAST(N'2024-05-30T00:19:17.6527594' AS DateTime2), CAST(N'2024-08-15T22:00:00.0000000' AS DateTime2), NULL)
INSERT [dbo].[Events] ([Id], [Name], [Description], [StartDate], [UserID], [SpaceID], [CreatedDate], [EndDate], [ImageUrl]) VALUES (10, N'Feria Salón Inmobiliario', N'SIMA es el evento inmobiliario más importante en el mercado español, y su enfoque se dirige a personas comunes, así como a empresas y profesionales tanto nacionales como internacionales.

La semana destacada en el mundo inmobiliario que organiza SIMA comenzará el 22 de mayo de 2024 en IFEMA Madrid, y contará con la celebración de 4 eventos que fortalecerán la colaboración entre los diversos actores del sector inmobiliario. Esto permitirá ofrecer una visión integral de una industria que se vuelve cada vez más compleja y diversificada en España.', CAST(N'2024-06-18T22:00:00.0000000' AS DateTime2), 6, 18, CAST(N'2024-05-30T00:29:35.5286524' AS DateTime2), CAST(N'2024-06-21T22:00:00.0000000' AS DateTime2), NULL)
INSERT [dbo].[Events] ([Id], [Name], [Description], [StartDate], [UserID], [SpaceID], [CreatedDate], [EndDate], [ImageUrl]) VALUES (11, N'Aula', N'Aula es un referente en el mundo de la educación, que ayuda al estudiante a decidir eficazmente sobre su futuro formativo y profesional. Su oferta incluye centros educativos y formativos, entidades y empresas de servicios que dan respuesta a las necesidades de formación de los estudiantes que la visitan, a partir de 4º de la E.S.O, para conocer y elegir el centro que más se adapta a sus intereses, el mejor lugar para adquirir formación para acceder posteriormente al mercado laboral.', CAST(N'2024-09-02T22:00:00.0000000' AS DateTime2), 6, 18, CAST(N'2024-05-30T00:44:08.3535849' AS DateTime2), CAST(N'2024-09-06T22:00:00.0000000' AS DateTime2), NULL)
SET IDENTITY_INSERT [dbo].[Events] OFF
GO
SET IDENTITY_INSERT [dbo].[Reserves] ON 

INSERT [dbo].[Reserves] ([Id], [SpaceId], [UserId], [CreatedDate], [EventId]) VALUES (1, 17, 6, CAST(N'2024-05-27T22:53:16.3355908' AS DateTime2), 6)
INSERT [dbo].[Reserves] ([Id], [SpaceId], [UserId], [CreatedDate], [EventId]) VALUES (2, 17, 4, CAST(N'2024-05-27T22:53:53.5105970' AS DateTime2), 7)
INSERT [dbo].[Reserves] ([Id], [SpaceId], [UserId], [CreatedDate], [EventId]) VALUES (3, 17, 4, CAST(N'2024-05-27T23:04:37.8777527' AS DateTime2), 8)
INSERT [dbo].[Reserves] ([Id], [SpaceId], [UserId], [CreatedDate], [EventId]) VALUES (4, 17, 6, CAST(N'2024-05-30T00:19:17.6903576' AS DateTime2), 9)
INSERT [dbo].[Reserves] ([Id], [SpaceId], [UserId], [CreatedDate], [EventId]) VALUES (5, 18, 6, CAST(N'2024-05-30T00:29:35.5365917' AS DateTime2), 10)
INSERT [dbo].[Reserves] ([Id], [SpaceId], [UserId], [CreatedDate], [EventId]) VALUES (6, 18, 6, CAST(N'2024-05-30T00:44:08.3631322' AS DateTime2), 11)
SET IDENTITY_INSERT [dbo].[Reserves] OFF
GO
SET IDENTITY_INSERT [dbo].[Spaces] ON 

INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (17, N'Estadio Santiago Bernabéu', N'Estadio de fútbol del Real Madrid', 81044, N'http://localhost:3000/imagenes/estadio_bernabeu.jpg', N'Madrid', 1, N'Av. de Concha Espina, 1, 28036 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (18, N'IFEMA - Feria de Madrid', N'Centro de exposiciones y eventos', 100000, N'http://localhost:3000/imagenes/ifema.jpg', N'Madrid', 2, N'Av. del Partenón, 5, 28042 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (19, N'Palacio de Congresos de Valencia', N'Centro para conferencias y eventos institucionales', 3000, N'http://localhost:3000/imagenes/palacio_congresos_valencia.jpg', N'Valencia', 3, N'Av. de las Cortes Valencianas, 60, 46015 Valencia, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (20, N'Camp Nou', N'Estadio de fútbol del FC Barcelona', 99354, N'http://localhost:3000/imagenes/camp_nou.jpg', N'Barcelona', 1, N'C. Arístides Maillol, 12, 08028 Barcelona, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (21, N'Fira Barcelona', N'Centro de exposiciones y convenciones', 240000, N'http://localhost:3000/imagenes/fira_barcelona.jpg', N'Barcelona', 2, N'Av. Reina Maria Cristina, s/n, 08004 Barcelona, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (22, N'Palacio de Congresos de Granada', N'Centro para conferencias y eventos institucionales', 2000, N'http://localhost:3000/imagenes/palacio_congresos_granada.jpg', N'Granada', 3, N'Paseo del Violón, 18006 Granada, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (23, N'Estadio La Cartuja', N'Estadio multiusos para eventos deportivos', 57226, N'http://localhost:3000/imagenes/estadio_cartuja.jpg', N'Sevilla', 1, N'Isla de la Cartuja, 41092 Sevilla, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (24, N'Palacio de Exposiciones y Congresos de Sevilla', N'Centro de exposiciones y eventos corporativos', 7200, N'http://localhost:3000/imagenes/palacio_exposiciones_sevilla.jpg', N'Sevilla', 2, N'Av. Alcalde Luis Uruñuela, 1, 41020 Sevilla, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (25, N'Auditorio Alfredo Kraus', N'Auditorio y centro de congresos', 2000, N'http://localhost:3000/imagenes/auditorio_kraus.jpg', N'Las Palmas', 3, N'Av. Príncipe de Asturias, s/n, 35010 Las Palmas de Gran Canaria, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (26, N'Estadio Mestalla', N'Estadio de fútbol del Valencia CF', 49000, N'http://localhost:3000/imagenes/estadio_mestalla.jpg', N'Valencia', 1, N'Av. de Suècia, s/n, 46010 Valencia, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (27, N'WiZink Center', N'Pabellón multiusos para eventos deportivos y conciertos', 17500, N'http://localhost:3000/imagenes/wizink_center.jpg', N'Madrid', 1, N'Av. Felipe II, s/n, 28009 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (28, N'WiZink Center', N'Pabellón multiusos para eventos deportivos y conciertos', 17500, N'http://localhost:3000/imagenes/wizink_center.jpg', N'Madrid', 2, N'Av. Felipe II, s/n, 28009 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (29, N'WiZink Center', N'Pabellón multiusos para eventos deportivos y conciertos', 17500, N'http://localhost:3000/imagenes/wizink_center.jpg', N'Madrid', 3, N'Av. Felipe II, s/n, 28009 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (30, N'Palau Sant Jordi', N'Pabellón multiusos para eventos deportivos y conciertos', 17200, N'http://localhost:3000/imagenes/palau_sant_jordi.jpg', N'Barcelona', 1, N'Pg. Olímpic, 5-7, 08038 Barcelona, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (31, N'Palau Sant Jordi', N'Pabellón multiusos para eventos deportivos y conciertos', 17200, N'http://localhost:3000/imagenes/palau_sant_jordi.jpg', N'Barcelona', 2, N'Pg. Olímpic, 5-7, 08038 Barcelona, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (32, N'Palau Sant Jordi', N'Pabellón multiusos para eventos deportivos y conciertos', 17200, N'http://localhost:3000/imagenes/palau_sant_jordi.jpg', N'Barcelona', 3, N'Pg. Olímpic, 5-7, 08038 Barcelona, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (33, N'Estadio Metropolitano', N'Estadio de fútbol del Atlético de Madrid', 68456, N'http://localhost:3000/imagenes/estadio_metropolitano.jpg', N'Madrid', 1, N'Av. de Luis Aragonés, 4, 28022 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (34, N'Centro de Convenciones Internacional de Barcelona (CCIB)', N'Centro de convenciones para eventos corporativos', 15000, N'http://localhost:3000/imagenes/ccib.jpg', N'Barcelona', 2, N'Plaza de Willy Brandt, 11-14, 08019 Barcelona, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (35, N'Palacio de Congresos de Zaragoza', N'Centro para conferencias y eventos institucionales', 2000, N'http://localhost:3000/imagenes/palacio_congresos_zaragoza.jpg', N'Zaragoza', 3, N'Plaza Lucas Miret Rodríguez, 1, 50018 Zaragoza, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (36, N'Estadio San Mamés', N'Estadio de fútbol del Athletic Club', 53289, N'http://localhost:3000/imagenes/san_mames.jpg', N'Bilbao', 1, N'C. Rafael Moreno Pitxitxi, s/n, 48013 Bilbao, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (37, N'Bilbao Exhibition Centre (BEC)', N'Centro de exposiciones y eventos', 150000, N'http://localhost:3000/imagenes/bec.jpg', N'Bilbao', 2, N'Rda. de Azkue, 1, 48902 Barakaldo, Bizkaia, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (38, N'Auditorio de Tenerife', N'Centro de congresos y eventos culturales', 1616, N'http://localhost:3000/imagenes/auditorio_tenerife.jpg', N'Santa Cruz de Tenerife', 3, N'Av. de la Constitución, 1, 38003 Santa Cruz de Tenerife, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (39, N'Estadio de Gran Canaria', N'Estadio multiusos para eventos deportivos', 32865, N'http://localhost:3000/imagenes/estadio_gran_canaria.jpg', N'Las Palmas', 1, N'C. Fondos de Segura, s/n, 35019 Las Palmas de Gran Canaria, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (40, N'Palacio de Ferias y Congresos de Málaga', N'Centro de exposiciones y eventos corporativos', 63000, N'http://localhost:3000/imagenes/palacio_ferias_malaga.jpg', N'Málaga', 2, N'Av. de José Ortega y Gasset, 201, 29006 Málaga, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (41, N'Palacio de Exposiciones y Congresos de Oviedo', N'Centro para conferencias y eventos institucionales', 2000, N'http://localhost:3000/imagenes/palacio_congresos_oviedo.jpg', N'Oviedo', 3, N'C. Arturo Álvarez Buylla, s/n, 33005 Oviedo, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (42, N'Estadio Martínez Valero', N'Estadio de fútbol del Elche CF', 33734, N'http://localhost:3000/imagenes/martinez_valero.jpg', N'Elche', 1, N'C. del Porta Coeli, 5, 03208 Elche, Alicante, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (43, N'Pabellón Multiusos Madrid Arena', N'Pabellón para eventos deportivos y conciertos', 12000, N'http://localhost:3000/imagenes/madrid_arena.jpg', N'Madrid', 1, N'Av. de Portugal, s/n, 28011 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (44, N'Pabellón Multiusos Madrid Arena', N'Pabellón para eventos deportivos y conciertos', 12000, N'http://localhost:3000/imagenes/madrid_arena.jpg', N'Madrid', 2, N'Av. de Portugal, s/n, 28011 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (45, N'Pabellón Multiusos Madrid Arena', N'Pabellón para eventos deportivos y conciertos', 12000, N'http://localhost:3000/imagenes/madrid_arena.jpg', N'Madrid', 3, N'Av. de Portugal, s/n, 28011 Madrid, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (46, N'Pabellón Multiusos de Guadalajara', N'Pabellón para eventos deportivos y conciertos', 5800, N'http://localhost:3000/imagenes/pabellon_guadalajara.jpg', N'Guadalajara', 1, N'Av. del Vado, 13, 19005 Guadalajara, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (47, N'Pabellón Multiusos de Guadalajara', N'Pabellón para eventos deportivos y conciertos', 5800, N'http://localhost:3000/imagenes/pabellon_guadalajara.jpg', N'Guadalajara', 2, N'Av. del Vado, 13, 19005 Guadalajara, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (48, N'Pabellón Multiusos de Guadalajara', N'Pabellón para eventos deportivos y conciertos', 5800, N'http://localhost:3000/imagenes/pabellon_guadalajara.jpg', N'Guadalajara', 3, N'Av. del Vado, 13, 19005 Guadalajara, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (49, N'Pabellón Príncipe Felipe', N'Pabellón para eventos deportivos y conciertos', 12600, N'http://localhost:3000/imagenes/principe_felipe.jpg', N'Zaragoza', 1, N'Av. Cesáreo Alierta, 120, 50013 Zaragoza, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (50, N'Pabellón Príncipe Felipe', N'Pabellón para eventos deportivos y conciertos', 12600, N'http://localhost:3000/imagenes/principe_felipe.jpg', N'Zaragoza', 2, N'Av. Cesáreo Alierta, 120, 50013 Zaragoza, España')
INSERT [dbo].[Spaces] ([Id], [Name], [Description], [MaxCapacity], [ImageUrl], [Ubication], [SpaceType], [Address]) VALUES (51, N'Pabellón Príncipe Felipe', N'Pabellón para eventos deportivos y conciertos', 12600, N'http://localhost:3000/imagenes/principe_felipe.jpg', N'Zaragoza', 3, N'Av. Cesáreo Alierta, 120, 50013 Zaragoza, España')
SET IDENTITY_INSERT [dbo].[Spaces] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Name], [Password], [Email], [CreatedDate]) VALUES (1, N'Oscar', N'$2a$11$zFGSeYQ0b5WUYVvwoz2ob.IdscR07UEkZFocdIKMw5It0MYIDf32y', N'oscar@example.com', CAST(N'2024-05-15T17:57:03.2386676' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Name], [Password], [Email], [CreatedDate]) VALUES (4, N'Pepe', N'$2a$11$L8YzXjFjETPZI7n6Z8NJie23thAjArNh7KEbXgreGy7DW90UloWkS', N'user@example.com', CAST(N'2024-05-15T21:40:12.2066656' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Name], [Password], [Email], [CreatedDate]) VALUES (6, N'Oscar', N'$2a$11$pCdtooakn/ek/m9g1ME6dOxwylqw8PSWSB1dvH/vvqBqJCtypySkO', N'oskr234@gmail.com', CAST(N'2024-05-20T17:12:50.7131521' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Name], [Password], [Email], [CreatedDate]) VALUES (7, N'juan', N'$2a$11$K.5KtieOmpZXGqEZ2F4yi.X5i3Mcvui.bbP7lUSI6wBBjRAFsrkVW', N'juan@example.com', CAST(N'2024-05-25T18:04:51.4081254' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Name], [Password], [Email], [CreatedDate]) VALUES (9, N'juan', N'$2a$11$nBQ/kPZydgAArc9b.EsQNehryuwynAvoTVL9KBdo1RqI9WTV53wsW', N'juan2@example.com', CAST(N'2024-05-25T18:07:53.4876196' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Name], [Password], [Email], [CreatedDate]) VALUES (10, N'ruben', N'$2a$11$Ou8z7nIHSfXsY2xUuyxMoeWBIy.nRpHa7IeNETfjoaqJnPiBfUlk2', N'ruben@example.com', CAST(N'2024-05-25T18:09:38.7032120' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Name], [Password], [Email], [CreatedDate]) VALUES (11, N'ala', N'$2a$11$CreiPTYbsg6brsvV6duDu.pL0/c1LIVGjDU.X7QkAtzO.op3eo7zS', N'ala@example.com', CAST(N'2024-05-25T21:42:38.9359196' AS DateTime2))
INSERT [dbo].[Users] ([Id], [Name], [Password], [Email], [CreatedDate]) VALUES (12, N'ale', N'$2a$11$2w/dRPGNE9NufnpTVfdKcumFkamk4L6iIqFI7Kg7NkLd59TLza7SG', N'ale@example.com', CAST(N'2024-05-25T21:49:40.8335296' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Users_Email]    Script Date: 30/05/2024 20:46:53 ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Users_Email] ON [dbo].[Users]
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Events] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [EndDate]
GO
ALTER TABLE [dbo].[Reserves] ADD  DEFAULT ((0)) FOR [EventId]
GO
ALTER TABLE [dbo].[Spaces] ADD  DEFAULT (N'') FOR [ImageUrl]
GO
ALTER TABLE [dbo].[Spaces] ADD  DEFAULT (N'') FOR [Ubication]
GO
ALTER TABLE [dbo].[Spaces] ADD  DEFAULT ((0)) FOR [SpaceType]
GO
ALTER TABLE [dbo].[Spaces] ADD  DEFAULT (N'') FOR [Address]
GO
USE [master]
GO
ALTER DATABASE [NexusEventsDB] SET  READ_WRITE 
GO
