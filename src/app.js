import './styles.css'
import {ContextMenu} from "@/menu";
import {SoundModule} from "@/modules/sound.module";

const menuModules = [
  new SoundModule('sound', 'Случайный звук'),
]

const menu = new ContextMenu('#menu')

menuModules.forEach((module) => menu.add(module))

