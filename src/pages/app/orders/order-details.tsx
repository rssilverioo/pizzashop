import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 998938383</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medum text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Rodrigo Soares Silverio
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">(11) 983739373</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                rodrigo.s.silverio@outlook.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado ha
              </TableCell>
              <TableCell className="flex justify-end">ha 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qnt</TableHead>
            <TableHead className="text-right">Preco</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Pizza pepporini Familia</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell>R$ 69,80</TableCell>
            <TableCell>R$ 139,80</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pizza muzzarela Familia</TableCell>
            <TableCell className="text-right">1</TableCell>
            <TableCell>R$ 33,80</TableCell>
            <TableCell>R$ 33,80</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="text-right font-medium">R$ 172,00</TableCell>
          </TableRow>
        </TableFooter>
      </div>
    </DialogContent>
  )
}
