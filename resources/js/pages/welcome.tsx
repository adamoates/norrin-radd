import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { Lock, Mail, Shield, Users } from 'lucide-react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative isolate">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl dark:text-white">
                            Welcome to <span className="text-blue-600 dark:text-blue-400">Earth-112</span>
                        </h1>
                        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg dark:text-gray-300">
                            A secure, invite-only platform for collaboration and management.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                            <Button asChild size="lg" className="w-full sm:w-32">
                                <Link href={route('login')}>Sign in</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="w-full sm:w-32">
                                <Link href={route('request-access')}>Request Access</Link>
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Access is restricted to invited users only.</p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">Secure by Design</h2>
                        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-300">
                            Access is restricted to invited users only, ensuring your data remains secure and private.
                        </p>
                    </div>
                    <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900 dark:text-white">
                                    <Lock className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400" />
                                    Invite-Only Access
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">Only users with valid invitation codes can register and access the platform.</p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900 dark:text-white">
                                    <Shield className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400" />
                                    Role-Based Security
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">Users are assigned specific roles with appropriate permissions and access levels.</p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900 dark:text-white">
                                    <Users className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400" />
                                    Controlled Growth
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">Administrators control who can join, ensuring quality and security of the user base.</p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
                    <Card className="mx-auto max-w-2xl">
                        <CardHeader className="text-center">
                            <CardTitle className="flex items-center justify-center gap-2 text-xl sm:text-2xl">
                                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                                Need Access?
                            </CardTitle>
                            <CardDescription>Contact an administrator to receive an invitation code for this platform.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
                                <Badge variant="outline">Invite-Only</Badge>
                                <Badge variant="outline">Secure</Badge>
                                <Badge variant="outline">Controlled</Badge>
                            </div>
                            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                This platform requires an invitation code to register. Please contact your administrator for access.
                            </p>
                            <div className="space-y-1 text-xs text-gray-500 dark:text-gray-500">
                                <p>• Invitation codes are unique and single-use</p>
                                <p>• Codes can be email-specific or open</p>
                                <p>• Role assignment is determined by invitation</p>
                                <p>• Registration is only available via invitation links</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
