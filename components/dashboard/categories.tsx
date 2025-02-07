export function Categories({ category }: { category: string }) {
  return (
    <div className="capitalize space-y-8 mb-8 transition-colors text-muted-foreground overflow-hidden">
      {category}
    </div>
  );
}
