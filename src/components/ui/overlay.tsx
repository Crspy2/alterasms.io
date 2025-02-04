import React from "react"
import {
    composeRenderProps,
    Popover as AriaPopover,
    OverlayArrow as AriaOverlayArrow,
    Modal as AriaModal,
    ModalOverlay as AriaModalOverlay,
    type PopoverProps as AriaPopoverProps,
    type ModalOverlayProps as AriaModalOverlayProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { useMediaQuery } from "@/hooks/use-media-query.ts"
import { cn } from "@/lib/utils/classes.ts"
type OverlayType = "modal" | "drawer" | "popover"

type OverlayProps = {
    type?: OverlayType
    mobileType?: OverlayProps["type"]
    showDismissButton?: boolean
    mediaQuery?: string
    children: React.ReactNode
    classNames?: ModalOverlayClassNames & DrawerOverlayClassNames & PopoverOverlayClassNames
} & Omit<AriaModalOverlayProps, "children"> &
    Omit<AriaPopoverProps, "children">

const Overlay = React.forwardRef<HTMLElement | HTMLDivElement, OverlayProps>(
    (
        {
            type: typeProp = "modal",
            mobileType,
            mediaQuery = "(max-width: 640px)",
            isDismissable = true,
            ...props
        },
        ref
    ) => {
        const isMobile = useMediaQuery(mediaQuery)
        const type = mobileType ? (isMobile ? mobileType : typeProp) : typeProp
        switch (type) {
            case "modal":
                return (
                    <ModalOverlay
                        ref={ref as React.ForwardedRef<HTMLDivElement>}
                        isDismissable={isDismissable}
                        {...props}
                    >
                        <>{props.children}</>
                    </ModalOverlay>
                )
            case "popover":
                return (
                    <PopoverOverlay ref={ref as React.ForwardedRef<HTMLElement>} {...props}>
                        <>{props.children}</>
                    </PopoverOverlay>
                )
        }
    }
)
Overlay.displayName = "Overlay"

const modalVariants = tv({
    slots: {
        backdrop: [
            "fixed inset-0 z-50 bg-black/80",
            "data-[exiting]:duration-300 data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0",
        ],
        overlay: [
            "group/overlay fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
            "border bg-bg shadow-lg sm:rounded-lg md:w-full",
            "duration-200 data-[exiting]:duration-300 data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[entering]:slide-in-from-left-1/2 data-[entering]:slide-in-from-top-[48%] data-[exiting]:slide-out-to-left-1/2 data-[exiting]:slide-out-to-top-[48%]",
        ],
    },
})

type ModalOverlaySlots = keyof ReturnType<typeof modalVariants>
type ModalOverlayClassNames = {
    [key in ModalOverlaySlots]?: string
}

interface ModalOverlayProps extends AriaModalOverlayProps {
    showDismissButton?: boolean
    classNames?: ModalOverlayClassNames
}

const ModalOverlay = React.forwardRef<React.ElementRef<typeof AriaModalOverlay>, ModalOverlayProps>(
    ({ classNames, className, isDismissable, ...props }, ref) => {
        const { overlay, backdrop } = modalVariants({})
        return (
            <AriaModalOverlay
                {...props}
                ref={ref}
                isDismissable={isDismissable}
                className={backdrop({ className: classNames?.backdrop })}
            >
                <AriaModal
                    {...props}
                    data-type="modal"
                    className={cn(overlay(), classNames?.overlay, className)}
                >
                    {composeRenderProps(props.children, (children) => (
                        <>
                            {children}
                        </>
                    ))}
                </AriaModal>
            </AriaModalOverlay>
        )
    }
)
ModalOverlay.displayName = "ModalOverlay"

const popoverOverlayVariants = tv({
    slots: {
        overlay:
            "group/overlay z-50 rounded-md border bg-bg text-fg shadow-md data-[trigger=Select]:min-w-[--trigger-width] data-[trigger=ComboBox]:min-w-[--trigger-width]",
        arrow: [
            "block fill-bg stroke-1 stroke-border",
            "group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180",
        ],
    },
})

type PopoverOverlaySlots = keyof ReturnType<typeof popoverOverlayVariants>
type PopoverOverlayClassNames = {
    [key in PopoverOverlaySlots]?: string
}

interface PopoverOverlayProps extends AriaPopoverProps {
    arrow?: boolean
    classNames?: PopoverOverlayClassNames
}

const PopoverOverlay = React.forwardRef<React.ElementRef<typeof AriaPopover>, PopoverOverlayProps>(
    ({ arrow = false, className, classNames, ...props }, ref) => {
        const { overlay, arrow: arrowStyle } = popoverOverlayVariants({})
        return (
            <AriaPopover
                data-type="popover"
                ref={ref}
                {...props}
                className={cn(overlay(), classNames?.overlay, className)}
            >
                {composeRenderProps(props.children, (children) => (
                    <>
                        {arrow && (
                            <AriaOverlayArrow className="group">
                                <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    className={arrowStyle({ className: classNames?.arrow })}
                                >
                                    <path d="M0 0 L6 6 L12 0" />
                                </svg>
                            </AriaOverlayArrow>
                        )}
                        {children}
                    </>
                ))}
            </AriaPopover>
        )
    }
)
PopoverOverlay.displayName = "PopoverOverlay"

const drawerVariants = tv({
    slots: {
        backdrop: ["fixed inset-0 bg-black/60 z-50", "opacity-0"],
        overlay: [
            "group/overlay bg-bg flex flex-col fixed z-50 outline-none",
            "inset-0",
            "placement-bottom:top-auto placement-top:bottom-auto placement-left:right-auto placement-right:left-auto",
            "placement-bottom:mt-24 placement-bottom:rounded-t-[10px] placement-bottom:border-t",
            "placement-top:mb-24 placement-top:rounded-b-[10px] placement-top:border-b",
            "placement-right:ml-24 placement-right:rounded-l-[10px] placement-right:border-l",
            "placement-left:mr-24 placement-left:rounded-r-[10px] placement-left:border-r",
            "touch-none will-change-transform",
            "placement-bottom:translate-y-full placement-top:-translate-y-full placement-left:-translate-x-full placement-right:translate-x-full", // required
            "max-h-[90%]",
        ],
    },
})

type DrawerOverlaySlots = keyof ReturnType<typeof drawerVariants>
type DrawerOverlayClassNames = {
    [key in DrawerOverlaySlots]?: string
}

export type { OverlayProps, ModalOverlayProps, PopoverOverlayProps }
export {
    Overlay,
    PopoverOverlay,
    ModalOverlay,
    drawerVariants,
    modalVariants,
    popoverOverlayVariants,
}
