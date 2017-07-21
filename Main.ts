import declarations from './declarations';
import TYPES from './Types';

var fileview = declarations.get<IFileView>(TYPES.FILEVIEW);

fileview.init();