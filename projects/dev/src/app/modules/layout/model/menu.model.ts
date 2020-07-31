export interface IMenu {
  label: string;
  href?: string;
  queryParams?: {
    [key: string]: any;
  };
  children?: IMenu[];
  isOpened?: boolean;
}
