import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 200

export const useStyles = makeStyles((theme) => ({
	drawerOpen: {
		width: drawerWidth,
		flexShrink: 0,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		flexShrink: 0,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
}))
