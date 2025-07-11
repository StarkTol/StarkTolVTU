"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, ArrowUpRight, ArrowDownLeft, Copy, CheckCircle2, CreditCard, Clock, BarChart3 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function WalletPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [isCopied, setIsCopied] = useState(false)

  // Mock wallet data
  const walletData = {
    balance: "₦125,000.00",
    accountNumber: "1234567890",
    accountName: "John Doe",
    bankName: "Babs VTU Bank",
  }

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      type: "credit",
      description: "Wallet Funding",
      amount: "₦50,000",
      date: "Today, 10:30 AM",
      status: "success",
    },
    {
      id: 2,
      type: "debit",
      description: "MTN Airtime Purchase",
      amount: "₦1,000",
      date: "Yesterday, 3:15 PM",
      status: "success",
    },
    {
      id: 3,
      type: "debit",
      description: "DSTV Subscription",
      amount: "₦24,500",
      date: "23/04/2023, 9:00 AM",
      status: "success",
    },
    {
      id: 4,
      type: "credit",
      description: "Referral Bonus",
      amount: "₦5,000",
      date: "20/04/2023, 11:45 AM",
      status: "success",
    },
    {
      id: 5,
      type: "debit",
      description: "Wallet Transfer",
      amount: "₦10,000",
      date: "18/04/2023, 2:30 PM",
      status: "success",
    },
  ]

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(walletData.accountNumber)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const navigateToFundWallet = () => {
    router.push("/dashboard/wallet/fund")
  }

  const navigateToTransfer = () => {
    router.push("/dashboard/wallet/transfer")
  }

  const navigateToTransactions = () => {
    router.push("/dashboard/wallet/transactions")
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Wallet</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Wallet Balance</CardTitle>
            <CardDescription>Your current wallet balance and account details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-center justify-between rounded-lg bg-gradient-to-r from-primary to-purple-600 p-6 text-white">
              <div>
                <p className="text-sm font-medium opacity-90">Available Balance</p>
                <p className="text-3xl font-bold">{walletData.balance}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Wallet className="h-6 w-6" />
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-4 font-semibold">Account Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Account Number</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{walletData.accountNumber}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleCopyAccountNumber}>
                      {isCopied ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                      <span className="sr-only">Copy account number</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Account Name</span>
                  <span className="font-medium">{walletData.accountName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Bank Name</span>
                  <span className="font-medium">{walletData.bankName}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <Button className="flex-1" onClick={navigateToFundWallet}>
                Fund Wallet
              </Button>
              <Button className="flex-1" variant="outline" onClick={navigateToTransfer}>
                Transfer Funds
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your wallet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline" onClick={navigateToFundWallet}>
              <ArrowUpRight className="mr-2 h-4 w-4" /> Fund Wallet
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={navigateToTransfer}>
              <ArrowDownLeft className="mr-2 h-4 w-4" /> Transfer Funds
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={navigateToTransactions}>
              <Wallet className="mr-2 h-4 w-4" /> Transaction History
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Summary</CardTitle>
              <CardDescription>Overview of your wallet activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Income</p>
                      <p className="text-xl font-bold">₦55,000</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <ArrowDownLeft className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Spending</p>
                      <p className="text-xl font-bold">₦38,000</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <p className="text-xl font-bold">₦0</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your recent wallet activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          transaction.type === "credit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}
                      >
                        {transaction.type === "credit" ? (
                          <ArrowUpRight className="h-5 w-5" />
                        ) : (
                          <ArrowDownLeft className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-xs text-muted-foreground">{transaction.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}
                        {transaction.amount}
                      </div>
                      <div className="text-xs text-green-600">{transaction.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={navigateToTransactions}>
                View All Transactions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Spending Analytics</CardTitle>
              <CardDescription>Analyze your spending patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Monthly Spending Report</div>
                    <div className="text-sm text-muted-foreground">View your spending patterns</div>
                  </div>
                </div>
                <Button variant="outline">View Report</Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Transaction History</div>
                    <div className="text-sm text-muted-foreground">Download your transaction history</div>
                  </div>
                </div>
                <Button variant="outline">Download</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
