import './styles.css'
import {ContextMenu} from "@/menu";
import {SoundModule} from "@/modules/sound.module";

const menu = new ContextMenu('#menu')

menu.add(new SoundModule('sound', 'Случайный звук'))

