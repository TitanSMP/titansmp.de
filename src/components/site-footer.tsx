import Link from "next/link";
import { headers } from "next/headers";
import ThemeModeSelect from "@/components/theme-mode-select";

export default async function SiteFooter() {
  const host = (await headers()).get("host")?.toLowerCase() ?? "";
  const isSubsiteDomain =
    host === "jumpstone.is-cool.dev" || host.endsWith(".vercel.app");
  const rootDomain = process.env.NEXT_PUBLIC_URL || "https://henrymeyer.de";
  const toMainDomain = (path: string) =>
    isSubsiteDomain ? `${rootDomain}${path}` : path;

  return (
    <footer className="mt-8 border-t border-border/30 bg-secondary-background ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-base border border-border/30 bg-background p-4">
            <h3 className="mb-3 text-sm font-heading">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                {isSubsiteDomain ? (
                  <a
                    className="underline underline-offset-2"
                    href={toMainDomain("/")}
                  >
                    Home
                  </a>
                ) : (
                  <Link
                    className="underline underline-offset-2"
                    href={toMainDomain("/")}
                  >
                    Home
                  </Link>
                )}
              </li>
              <li>
                {isSubsiteDomain ? (
                  <a
                    className="underline underline-offset-2"
                    href={toMainDomain("/")}
                  >
                    About
                  </a>
                ) : (
                  <Link
                    className="underline underline-offset-2"
                    href={toMainDomain("/about")}
                  >
                    About
                  </Link>
                )}
              </li>
              <li>
                {isSubsiteDomain ? (
                  <a
                    className="underline underline-offset-2"
                    href={toMainDomain("/")}
                  >
                    Docs
                  </a>
                ) : (
                  <Link
                    className="underline underline-offset-2"
                    href={toMainDomain("/docs")}
                  >
                    Docs
                  </Link>
                )}
              </li>
              <li>
                {isSubsiteDomain ? (
                  <a
                    className="underline underline-offset-2"
                    href={toMainDomain("/contact")}
                  >
                    Contact
                  </a>
                ) : (
                  <Link
                    className="underline underline-offset-2"
                    href={toMainDomain("/contact")}
                  >
                    Contact
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="rounded-base border border-border/30 bg-background p-4">
            <h3 className="mb-3 text-sm font-heading">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                {isSubsiteDomain ? (
                  <a
                    className="underline underline-offset-2"
                    href={toMainDomain("/legal/imprint")}
                  >
                    Imprint
                  </a>
                ) : (
                  <Link
                    className="underline underline-offset-2"
                    href={toMainDomain("/legal/imprint")}
                  >
                    Imprint
                  </Link>
                )}
              </li>
              <li>
                {isSubsiteDomain ? (
                  <a
                    className="underline underline-offset-2"
                    href={toMainDomain("/legal/privacy")}
                  >
                    Privacy Policy
                  </a>
                ) : (
                  <Link
                    className="underline underline-offset-2"
                    href={toMainDomain("/legal/privacy")}
                  >
                    Privacy Policy
                  </Link>
                )}
              </li>
              <li>
                {isSubsiteDomain ? (
                  <a
                    className="underline underline-offset-2"
                    href={toMainDomain("/code-of-conduct")}
                  >
                    Code of Conduct
                  </a>
                ) : (
                  <Link
                    className="underline underline-offset-2"
                    href={toMainDomain("/code-of-conduct")}
                  >
                    Code of Conduct
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="rounded-base border border-border/30 bg-background p-4">
            <h3 className="mb-3 text-sm font-heading">Appearance</h3>
            <div className="mt-1">
              <ThemeModeSelect />
            </div>
          </div>

          <div className="rounded-base border border-border/30 bg-background p-4">
            <h3 className="mb-3 text-sm font-heading">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="underline underline-offset-2"
                  href="https://github.com/titansmp"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-2"
                  href="https://modrinth.com/organization/titansmp"
                  target="_blank"
                >
                  Modrinth
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-2"
                  href="https://discord.gg/88k3eUvADh"
                  target="_blank"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-base border border-border/30 bg-main px-4 py-3 text-sm text-main-foreground">
          Based on HenryMM Website © 2025 - 2026 by Henry Meyer. Licensed under
          GPL-3.0.
        </div>
        <div className="mt-3 rounded-base border border-border/30 bg-background px-4 py-2 text-xs text-foreground/70 md:text-sm">
          Developed with 🤍 by{" "}
          <a
            className="underline underline-offset-2"
            href="https://henrymeyer.de"
          >
            Henry Meyer
          </a>
          . Managed with 🤍 by Matti and Joel.
        </div>
      </div>
    </footer>
  );
}
