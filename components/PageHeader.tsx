type Props = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

export function PageHeader({ title, description, actions }: Props) {
  return (
    <div className="pageHeader">
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {actions ? <div className="pageActions">{actions}</div> : null}
    </div>
  );
}
