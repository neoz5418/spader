import {
	IconApps,
	IconBarrierBlock,
	IconBoxSeam,
	IconChartHistogram,
	IconChecklist,
	IconComponents,
	IconContainer,
	IconError404,
	IconExclamationCircle,
	IconFile,
	IconHexagonNumber1,
	IconHexagonNumber2,
	IconHexagonNumber3,
	IconHexagonNumber4,
	IconHexagonNumber5,
	IconHome,
	IconLayoutDashboard,
	IconLock,
	IconLogs,
	IconMessages,
	IconRouteAltLeft,
	IconServer,
	IconServerOff,
	IconSettings,
	IconTemplate,
	IconTruck,
	IconUserShield,
	IconUsers,
	IconUsersGroup,
} from "@tabler/icons-react";

export interface NavLink {
	title: string;
	label?: string;
	href: string;
	icon: JSX.Element;
}

export interface SideLink extends NavLink {
	sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
	// {
	//   title: '总览',
	//   label: '',
	//   href: '/',
	//   icon: <IconHome size={18} />,
	// },
	{
		title: "算力容器",
		label: "",
		href: "/instances",
		icon: <IconServer size={18} />,
	},
	// {
	//   title: '文件存储',
	//   label: '',
	//   href: '/files',
	//   icon: <IconFile size={18} />,
	// },
	// {
	//   title: '镜像管理',
	//   label: '',
	//   href: '/images',
	//   icon: <IconContainer size={18} />,
	// },
	// {
	//   title: '模板管理',
	//   label: '',
	//   href: '/templates',
	//   icon: <IconTemplate size={18} />,
	// },
	// {
	//   title: '成员管理',
	//   label: '',
	//   href: '/members',
	//   icon: <IconUsersGroup size={18} />,
	// },
	{
		title: "审计日志",
		label: "",
		href: "/audit-logs",
		icon: <IconLogs size={18} />,
	},
	{
		title: "账单管理",
		label: "",
		href: "/billing",
		icon: <IconLogs size={18} />,
	},
	{
		title: "工作区设置",
		label: "",
		href: "/settings",
		icon: <IconSettings size={18} />,
	},
];
