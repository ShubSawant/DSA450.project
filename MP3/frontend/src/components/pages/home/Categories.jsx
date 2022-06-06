import { Button, Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { categories } from '../../../data/categoriesdata';
import {Drawer as MUIDrawer , ListItem, List,ListItemIcon,ListItemText} from '@material-ui/core'


const useStyle = makeStyles({
  // table: {
  //   border: '1px solid rgba(224, 224, 224, 1)'
  // },
  // write: {
  //   margin: 20,
  //   width: '85%',
  //   background: '#6495ED',
  //   color: '#fff',
  //   textDecoration: 'none'
  // },
  // link: {
  //   textDecoration: 'none',
  //   color: 'inherit'
  // },
  // category: {
  //   cursor: "pointer",
  // }
  drawer : {
    width:240,
  }
})

const Categories = ({ match }) => {
  const classes = useStyle();
  const itemList = ['All mail', 'Trash', 'Spam'];
  return (
    <>
            <MUIDrawer varient="permanent" open className={classes.drawer}>
              <List>
              {itemList.map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
              </List>
            </MUIDrawer>



    </>
  )
}

export default Categories;